import { PortableText } from "@portabletext/react";

export function RichContent(props: Parameters<typeof PortableText>[0]) {
  return (
    <PortableText
      value={props.value}
      components={{
        block: {
          normal: ({ children }) => <>{children}</>,
        },
        ...props.components,
      }}
    />
  );
}
