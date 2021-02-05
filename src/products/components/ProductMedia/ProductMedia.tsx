import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/MenuList";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import { makeStyles } from "@material-ui/core/styles";
import CardTitle from "@saleor/components/CardTitle";
import ImageUpload from "@saleor/components/ImageUpload";
import MediaTile from "@saleor/components/MediaTile";
import { ReorderAction } from "@saleor/types";
import { ProductMediaType } from "@saleor/types/globalTypes";
import createMultiFileUploadHandler from "@saleor/utils/handlers/multiFileUploadHandler";
import classNames from "classnames";
import React from "react";
import { useIntl } from "react-intl";
import { SortableContainer, SortableElement } from "react-sortable-hoc";

import { ProductDetails_product_media } from "../../types/ProductDetails";

const useStyles = makeStyles(
  theme => ({
    card: {
      marginTop: theme.spacing(2),
      [theme.breakpoints.down("sm")]: {
        marginTop: 0
      }
    },
    fileField: {
      display: "none"
    },
    icon: {
      color: "rgba(255, 255, 255, 0.54)"
    },
    image: {
      height: "100%",
      objectFit: "contain",
      userSelect: "none",
      width: "100%"
    },
    imageContainer: {
      "&:hover, &.dragged": {
        "& $imageOverlay": {
          display: "block"
        }
      },
      background: "#ffffff",
      border: "1px solid #eaeaea",
      borderRadius: theme.spacing(),
      height: 140,
      margin: "auto",
      overflow: "hidden",
      padding: theme.spacing(2),
      position: "relative",
      width: 140
    },
    imageGridContainer: {
      position: "relative"
    },
    imageOverlay: {
      background: "rgba(0, 0, 0, 0.6)",
      cursor: "move",
      display: "none",
      height: 140,
      left: 0,
      padding: theme.spacing(2),
      position: "absolute",
      top: 0,
      width: 140
    },
    imageOverlayToolbar: {
      alignContent: "flex-end",
      display: "flex",
      position: "relative",
      right: -theme.spacing(3),
      top: -theme.spacing(2)
    },
    imageUpload: {
      height: "100%",
      left: 0,
      outline: 0,
      position: "absolute",
      top: 0,
      width: "100%"
    },
    imageUploadActive: {
      zIndex: 1
    },
    imageUploadIconActive: {
      display: "block"
    },
    root: {
      display: "grid",
      gridColumnGap: theme.spacing(2),
      gridRowGap: theme.spacing(2),
      gridTemplateColumns: "repeat(4, 1fr)",
      [theme.breakpoints.down("sm")]: {
        gridTemplateColumns: "repeat(3, 1fr)"
      },
      [theme.breakpoints.down("xs")]: {
        gridTemplateColumns: "repeat(2, 1fr)"
      }
    },
    rootDragActive: {
      opacity: 0.2
    }
  }),
  { name: "ProductMedia" }
);

interface SortableMediaProps {
  media: {
    id: string;
    alt?: string;
    url: string;
  };
  onEdit: (id: string) => void;
  onDelete: () => void;
}

const SortableMedia = SortableElement<SortableMediaProps>(
  ({ media, onEdit, onDelete }) => (
    <MediaTile
      media={media}
      onEdit={onEdit ? () => onEdit(media.id) : undefined}
      onDelete={onDelete}
    />
  )
);

interface MediaListContainerProps {
  className: string;
  media: ProductDetails_product_media[];
  preview: ProductDetails_product_media[];
  onDelete: (id: string) => () => void;
  onEdit: (id: string) => () => void;
}

const MediaListContainer = SortableContainer<MediaListContainerProps>(
  ({ media, preview, onDelete, onEdit, ...props }) => (
    <div {...props}>
      {media.map((mediaObj, index) => (
        <SortableMedia
          key={`item-${index}`}
          index={index}
          media={mediaObj}
          onEdit={onEdit ? onEdit(mediaObj.id) : null}
          onDelete={onDelete(mediaObj.id)}
        />
      ))}
      {preview
        .sort((a, b) => (a.sortOrder > b.sortOrder ? 1 : -1))
        .map((mediaObj, index) => (
          <MediaTile loading={true} media={mediaObj} key={index} />
        ))}
    </div>
  )
);

interface ProductMediaProps {
  placeholderImage?: string;
  media: ProductDetails_product_media[];
  loading?: boolean;
  onImageDelete: (id: string) => () => void;
  onImageEdit: (id: string) => () => void;
  onImageReorder?: ReorderAction;
  onImageUpload(file: File);
  openVideoUrlModal();
}

const ProductMedia: React.FC<ProductMediaProps> = props => {
  const {
    media,
    placeholderImage,
    onImageEdit,
    onImageDelete,
    onImageReorder,
    onImageUpload,
    openVideoUrlModal
  } = props;

  const classes = useStyles(props);
  const intl = useIntl();
  const imagesUpload = React.useRef(null);
  const anchor = React.useRef();
  const [imagesToUpload, setImagesToUpload] = React.useState<
    ProductDetails_product_media[]
  >([]);
  const [popperOpenStatus, setPopperOpenStatus] = React.useState(false);

  const handleImageUpload = createMultiFileUploadHandler(onImageUpload, {
    onAfterUpload: () =>
      setImagesToUpload(prevImagesToUpload => prevImagesToUpload.slice(1)),
    onStart: files => {
      Array.from(files).forEach((file, fileIndex) => {
        const reader = new FileReader();
        reader.onload = event => {
          setImagesToUpload(prevImagesToUpload => [
            ...prevImagesToUpload,
            {
              __typename: "ProductMedia",
              alt: "",
              id: "",
              sortOrder: fileIndex,
              type: ProductMediaType.IMAGE,
              url: event.target.result as string
            }
          ]);
        };
        reader.readAsDataURL(file);
      });
    }
  });

  return (
    <Card className={classes.card}>
      <CardTitle
        title={intl.formatMessage({
          defaultMessage: "Media",
          description: "section header"
        })}
        toolbar={
          <>
            <Button
              onClick={() => setPopperOpenStatus(true)}
              variant="text"
              color="primary"
              data-test="button-upload-image"
              ref={anchor}
            >
              {intl.formatMessage({
                defaultMessage: "Upload",
                description: "modal button upload"
              })}
            </Button>

            <Popper
              open={popperOpenStatus}
              anchorEl={anchor.current}
              transition
              placement="bottom-end"
            >
              {({ TransitionProps }) => (
                <Grow {...TransitionProps}>
                  <Paper>
                    <ClickAwayListener
                      onClickAway={() => setPopperOpenStatus(false)}
                      mouseEvent="onClick"
                    >
                      <Menu>
                        <MenuItem
                          onClick={() => imagesUpload.current.click()}
                          data-test="uploadImages"
                          key="upload-images"
                        >
                          {intl.formatMessage({
                            defaultMessage: "Upload Images",
                            description: "modal button images upload"
                          })}
                        </MenuItem>
                        <MenuItem
                          onClick={openVideoUrlModal}
                          data-test="uploadVideoURL"
                          key="upload-video-url"
                        >
                          {intl.formatMessage({
                            defaultMessage: "Upload URL",
                            description: "modal button url upload"
                          })}
                        </MenuItem>
                      </Menu>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>

            <input
              className={classes.fileField}
              id="fileUpload"
              onChange={event => handleImageUpload(event.target.files)}
              multiple
              type="file"
              ref={imagesUpload}
              accept="image/*"
            />
          </>
        }
      />
      <div className={classes.imageGridContainer}>
        {media === undefined ? (
          <CardContent>
            <div className={classes.root}>
              <div className={classes.imageContainer}>
                <img className={classes.image} src={placeholderImage} />
              </div>
            </div>
          </CardContent>
        ) : media.length > 0 ? (
          <>
            <ImageUpload
              className={classes.imageUpload}
              isActiveClassName={classes.imageUploadActive}
              disableClick={true}
              hideUploadIcon={true}
              iconContainerActiveClassName={classes.imageUploadIconActive}
              onImageUpload={handleImageUpload}
            >
              {({ isDragActive }) => (
                <CardContent>
                  <MediaListContainer
                    distance={20}
                    helperClass="dragged"
                    axis="xy"
                    media={media}
                    preview={imagesToUpload}
                    onSortEnd={onImageReorder}
                    className={classNames({
                      [classes.root]: true,
                      [classes.rootDragActive]: isDragActive
                    })}
                    onDelete={onImageDelete}
                    onEdit={onImageEdit}
                  />
                </CardContent>
              )}
            </ImageUpload>
          </>
        ) : (
          <ImageUpload onImageUpload={handleImageUpload} />
        )}
      </div>
    </Card>
  );
};
ProductMedia.displayName = "ProductMedia";
export default ProductMedia;