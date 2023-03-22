import styles from "./Canvas.module.css";
import {useEffect, useRef} from "react";

const SPEED = 0.02;
const C1 = 161;
const C2 = 64;

const Canvas = () => {
  const canvasRef = useRef <HTMLCanvasElement>(null);

  const color = function (context: CanvasRenderingContext2D | null, {x, y, r, g, b}: { x: number; y: number; r: number; g: number; b: number; }) {
    // @ts-ignore
    context.fillStyle = `rgb(${r}, ${g}, ${b})`;
    // @ts-ignore
    context.fillRect(x, y, 1, 1);
  };

  const R = function (x: number, y: number, time: number) {
    return Math.floor(C1 + C2 * Math.cos((x * x - y * y) / 300 + time));
  };

  const G = function (x: number, y: number, time: number) {
    return Math.floor(
      C1 +
      C2 *
      Math.sin(
        (x * x * Math.cos(time / 4) + y * y * Math.sin(time / 3)) / 300
      )
    );
  };

  const B = function (x: number, y: number, time: number) {
    return Math.floor(
      C1 +
      C2 *
      Math.sin(
        5 * Math.sin(time / 9) +
        ((x - 100) * (x - 100) + (y - 100) * (y - 100)) / 1100
      )
    );
  };

  useEffect(() => {
    const canvas = canvasRef.current;

    if (canvas) {
      const ctx = canvas.getContext("2d");

      let time = 0;

      const loop = function () {
        for (let x = 0; x <= 32; x++) {
          for (let y = 0; y <= 32; y++) {
            color(ctx, {
              x,
              y,
              r: R(x, y, time),
              g: G(x, y, time),
              b: B(x, y, time),
            });
          }
        }

        time = time + SPEED;

        window.requestAnimationFrame(loop);
      };

      loop();
    }
  }, []);

  return (
    <div className={styles.container}>
      <canvas className={styles.canvas} ref={canvasRef} id="canvas" width="32px" height="32px" style={{opacity: 1, transition: "opacity 1.8s ease-in 50ms", position: "relative", display: "block", width: "100%", height: "100%"}} />
    </div>
  )
}

export default Canvas