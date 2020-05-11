import React, { useEffect, useRef, useState } from 'react';
import { Bg, Coordinates, CanvasOffset, CoordinatesOfRectangle } from './GetDimensionTypes';
import LoadImage from './LoadImage';
import ViewCoordinates from './ViewCoordinates';

const GetDimension: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);
  const [bg, setBg] = useState<Bg | null>(null);
  const [coordinatesOfRectangle, setCoordinatesOfRectangle] = useState<CoordinatesOfRectangle>();

  const handleDrawOnImage = (imgLink: string) => {
    const img = new Image();
    img.src = imgLink;
    img.onload = () => {
      context?.drawImage(img, 0, 0, img.width, img.height);
      setBg({ img, x: 0, y: 0, w: img.width, h: img.height });
    };
  };

  useEffect(() => {
    let mouseDown: boolean = false;
    let lastMouse: Coordinates = { x: 0, y: 0 };
    let mouse: Coordinates = { x: 0, y: 0 };
    let canvasOffset: CanvasOffset = { left: 0, top: 0 };

    function handleMouseDown(evt: MouseEvent) {
      mouseDown = true;
      lastMouse = {
        x: evt.clientX - canvasOffset.left,
        y: evt.clientY - canvasOffset.top,
      };

      mouse = {
        x: evt.clientX - canvasOffset.left,
        y: evt.clientY - canvasOffset.top,
      };
    }

    function handleMouseUp(evt: MouseEvent) {
      mouseDown = false;
      setCoordinatesOfRectangle({
        A: { x: lastMouse.x, y: lastMouse.y },
        B: { x: mouse.x, y: lastMouse.y },
        C: { x: lastMouse.x, y: mouse.y },
        D: { x: mouse.x, y: mouse.y },
      });
    }

    function handleMouseMove(evt: MouseEvent) {
      if (mouseDown && context) {
        mouse = {
          x: evt.clientX - canvasOffset.left,
          y: evt.clientY - canvasOffset.top,
        };

        context.clearRect(0, 0, canvasRef.current!.width, canvasRef.current!.height);
        context.beginPath();
        const width = mouse.x - lastMouse.x;
        const height = mouse.y - lastMouse.y;
        context.rect(lastMouse.x, lastMouse.y, width, height);
        context.strokeStyle = 'black';
        context.lineWidth = 1;
        if (bg) {
          const { img, x, y, w, h } = bg;
          context.drawImage(img, x, y, w, h);
        }
        context.stroke();
      }
    }

    if (canvasRef.current) {
      const renderCtx = canvasRef.current.getContext('2d');
      if (renderCtx) {
        canvasRef.current.addEventListener('mousedown', handleMouseDown);
        canvasRef.current.addEventListener('mouseup', handleMouseUp);
        canvasRef.current.addEventListener('mousemove', handleMouseMove);

        canvasOffset.left = canvasRef.current.offsetLeft;
        canvasOffset.top = canvasRef.current.offsetTop;
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
  }, [bg, context]);

  return (
    <div>
      LOAD IMAGE
      <LoadImage handleDrawOnImage={handleDrawOnImage} />
      <canvas ref={canvasRef} width={250} height={170} style={{ border: '2px solid black' }} />
      <ViewCoordinates coordinatesOfRectangle={coordinatesOfRectangle} />
    </div>
  );
};

export default GetDimension;
