import type { ReactNode } from "react";

interface BoxProps {
  id?: string;
  num?: string;
  label?: string;
  span?: string;
  headExtra?: ReactNode;
  gridTexture?: boolean;
  className?: string;
  bodyClassName?: string;
  children: ReactNode;
}

export default function Box({
  id,
  num,
  label,
  span = "",
  headExtra,
  gridTexture = false,
  className = "",
  bodyClassName = "",
  children,
}: BoxProps) {
  const hasHead = num != null || label != null || headExtra != null;

  return (
    <section
      id={id}
      className={`box fin ${gridTexture ? "box-grid" : ""} ${span} ${className}`}
    >
      {hasHead && (
        <div className="box-head">
          {num != null && <span className="sec-num">{num}</span>}
          {label != null && <span className="sec-label">{label}</span>}
          {headExtra != null && <span className="ml-auto">{headExtra}</span>}
        </div>
      )}
      <div className={`box-body ${bodyClassName}`}>{children}</div>
    </section>
  );
}
