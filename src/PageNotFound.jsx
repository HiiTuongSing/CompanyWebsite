import { TextContainerTitle } from "./PageComponent";

export default function PageNotFound() {
  return (
    <>
      <TextContainerTitle
        text="404 Page Not Found"
        img="Shrugs"
        description="Sorry but we can't seem to find the page at the moment :("
        textStyle={{
          background: "rgba(255, 255, 255, 0.5)",
          width: "100%",
          textAlign: "center",
          padding: "2rem",
        }}
      />
    </>
  );
}
