import React, { ReactElement, useEffect, useRef, useState } from "react";
import qrcode, { QRCodeRenderersOptions } from "qrcode";

import { useWindowDimensions } from "../util/useWindowDimensions";

interface QrCodeProps {
  value: string;
  hasBorder?: boolean;
}

export const QrCode = ({
  value,
  hasBorder,
  ...rest
}: QrCodeProps & Omit<QRCodeRenderersOptions, "width">): ReactElement => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [qrWidth, setQrWidth] = useState<number>();
  const { width } = useWindowDimensions();

  /* A hack to make QR code responsive when viewport is <300px */
  useEffect(() => {
    if (width <= 300) {
      const eightyPercentWidth = Math.floor(width * 0.8);
      setQrWidth(eightyPercentWidth);
    } else {
      setQrWidth(undefined);
    }
  }, [width]);

  useEffect(() => {
    if (!canvasRef.current || !value) return;

    const options: QRCodeRenderersOptions = { scale: 3, ...rest };
    if (qrWidth) options.width = qrWidth;

    qrcode.toCanvas(
      canvasRef.current,
      value,
      options,
      (e) => e && console.error(e)
    );
  }, [value, rest, qrWidth]);

  return (
    <canvas
      style={{
        border: hasBorder ? "1px solid #e2e8f0" : "none",
        pageBreakInside: "avoid",
        display: "inline-block",
      }}
      ref={canvasRef}
    />
  );
};
