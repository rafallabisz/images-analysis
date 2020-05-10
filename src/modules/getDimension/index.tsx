import React, { useState, useEffect, useRef } from 'react';
import imageUtility from 'utils/ImageUtility';

type Coordinates = {
  x: number;
  y: number;
};

const GetDimension: React.FC = () => {
  const [loadImage, setLoadImage] = useState<string>();

  let canvasRef = useRef<HTMLCanvasElement>(null);
  const [context, setContext] = React.useState<CanvasRenderingContext2D | null>(null);

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.currentTarget.files;
    if (file) {
      const image = await imageUtility.toBase64(file[0]);
      setLoadImage(image);
    }
  };

  useEffect(() => {
    let mouseDown: boolean = false;
    let last_mouse: Coordinates = { x: 0, y: 0 };
    let mouse: Coordinates = { x: 0, y: 0 };
    let canvasOffsetLeft: number = 0;
    let canvasOffsetTop: number = 0;

    function handleMouseDown(evt: MouseEvent) {
      mouseDown = true;
      last_mouse = {
        x: evt.clientX - canvasOffsetLeft,
        y: evt.clientY - canvasOffsetTop,
      };

      mouse = {
        x: evt.clientX - canvasOffsetLeft,
        y: evt.clientY - canvasOffsetTop,
      };
    }

    function handleMouseUp(evt: MouseEvent) {
      mouseDown = false;
    }

    function handleMouseMove(evt: MouseEvent) {
      if (mouseDown && context) {
        mouse = {
          x: evt.clientX - canvasOffsetLeft,
          y: evt.clientY - canvasOffsetTop,
        };

        context.clearRect(0, 0, canvasRef.current!.width, canvasRef.current!.height);
        context.beginPath();
        const width = mouse.x - last_mouse.x;
        const height = mouse.y - last_mouse.y;
        context.rect(last_mouse.x, last_mouse.y, width, height);
        context.strokeStyle = 'black';
        context.lineWidth = 2;
        context.stroke();
      }
    }

    if (canvasRef.current) {
      const renderCtx = canvasRef.current.getContext('2d');
      if (renderCtx) {
        canvasRef.current.addEventListener('mousedown', handleMouseDown);
        canvasRef.current.addEventListener('mouseup', handleMouseUp);
        canvasRef.current.addEventListener('mousemove', handleMouseMove);

        canvasOffsetLeft = canvasRef.current.offsetLeft;
        canvasOffsetTop = canvasRef.current.offsetTop;
        setContext(renderCtx);
      }
    }

    return function cleanup() {
      if (canvasRef.current) {
        canvasRef.current.removeEventListener('mousedown', handleMouseDown);
        canvasRef.current.removeEventListener('mouseup', handleMouseUp);
        canvasRef.current.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, [context]);

  return (
    <div>
      LOAD IMAGE
      <div className="form-group">
        <input
          type="file"
          className="input-file"
          placeholder="Image"
          name="image"
          onChange={(e) => handleImageChange(e)}
        />
      </div>
      {loadImage && <img src={loadImage} alt="load-images" />}
      <div>
        <canvas ref={canvasRef} width={640} height={425} style={{ border: '2px solid black' }} />
      </div>
    </div>
  );
};

export default GetDimension;
