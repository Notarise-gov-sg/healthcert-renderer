import React, { ReactElement, useEffect, useRef } from "react";
import qrcode, { QRCodeRenderersOptions } from "qrcode";

interface QrCodeProps {
  value: string;
  hasBorder?: boolean;
}

export const QrCode = ({
  value,
  hasBorder,
  ...rest
}: QrCodeProps & QRCodeRenderersOptions): ReactElement => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current || !value) return;

    qrcode.toCanvas(
      canvasRef.current,
      value,
      { scale: 3, ...rest },
      (e) => e && console.error(e)
    );
  }, [value, rest]);

  return (
    <canvas
      style={hasBorder ? { border: "1px solid #e2e8f0" } : {}}
      ref={canvasRef}
    />
  );
};
