import { PortableText } from "@portabletext/react";

export function RichContent(props: Parameters<typeof PortableText>[0]) {
  return (
    <PortableText
      value={props.value}
      components={{
        block: {
          normal: ({ children }) => <>{children}</>,
          h1: ({ children }) => (
            <h1 className="text-3xl text-bold">{children}</h1>
          ),
          h2: ({ children }) => (
            <h1 className="text-2xl text-bold">{children}</h1>
          ),
          h3: ({ children }) => (
            <h1 className="text-xl text-bold">{children}</h1>
          ),
          h4: ({ children }) => (
            <h1 className="text-lg text-bold">{children}</h1>
          ),
        },
        ...props.components,
      }}
    />
  );
}

export type RichContentValue = Parameters<typeof PortableText>[0]["value"];
