export function TextContainerTitle({ text, img, textStyle, description }) {
  return (
    <div className="text-container-title m-auto d-flex align-items-center justify-content-center">
      {img && <img src={"/" + img + ".jpg"} alt={img} />}
      <div style={textStyle}>
        {text && <p className="display-1">{text}</p>}
        {description && <p className="pb-0 mb-0">{description}</p>}
      </div>
    </div>
  );
}

export function TextContainerBody({
  img,
  title,
  description,
  link,
  href,
  textStyle,
  containerStyle,
}) {
  return (
    <div
      className="text-container-body py-3 my-3 px-lg-3 mx-lg-3 px-0 mx-0 row"
      style={containerStyle}
    >
      <div className="p-xs-0 col-sm-12 col-lg-6 pe-lg-5 d-flex flex-column justify-content-center">
        <img
          loading="lazy"
          className="rounded"
          src={"/" + img + ".jpg"}
          alt={img}
        />
      </div>
      <div className="col-sm-12 col-lg-6 ps-lg-3 p-sm-5" style={textStyle}>
        <p className="display-3 mb-5">{title}</p>
        {description && <p className="lead mb-5">{description}</p>}
        {link && (
          <p className="m-auto m-lg-0">
            <a className="btn btn-primary" href={href}>
              {link}
            </a>
          </p>
        )}
      </div>
    </div>
  );
}

export function BottomBanner({ title, description, href, link }) {
  return (
    <div className="bottom-banner p-5 text-center">
      <h1 className="mb-3">{title}</h1>
      {description && <p className="mb-3">{description}</p>}
      <a href={href} className="btn btn-primary">
        {link}
      </a>
    </div>
  );
}

export function PhotoGallery({ imagesArr }) {
  return (
    <div className="photo-gallery">
      {imagesArr.map((image, index) => (
        <img
          className="rounded p-0 m-0"
          key={index}
          src={"/" + image + ".jpg"}
          alt={image}
        />
      ))}
    </div>
  );
}

export function TextContainerBody2({
  id,
  img,
  title,
  subtitle,
  description,
  textStyle,
  color,
}) {
  return (
    <div
      id={id}
      className="text-container-body-2 rounded py-3 my-3 px-lg-3 mx-lg-3 px-0 mx-0 row"
      style={{ backgroundColor: color }}
    >
      <div className="col-sm-12 col-lg-3 p-3 d-flex align-items-center">
        <img
          loading="lazy"
          className="rounded"
          src={"/" + img + ".jpg"}
          alt={img}
        />
      </div>
      <div className="col-sm-12 col-lg-9 ps-3" style={textStyle}>
        <p className="display-3 mb-5">{title}</p>
        {subtitle && <p className="lead mb-5">{subtitle}</p>}
        {description && <p className="mb-5">{description}</p>}
      </div>
    </div>
  );
}

export function FooterTitle({ className, title, content }) {
  return (
    <div className={className}>
      {title && (
        <p>
          <strong>{title}</strong>
        </p>
      )}
      {content}
    </div>
  );
}

export function FooterContent({ content, index }) {
  return (
    <div className="p-lg-0 m-0" key={index}>
      {content}
    </div>
  );
}
