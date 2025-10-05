import React, { useEffect, useRef } from 'react';

const LiquidGlassBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // 设置画布尺寸
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // 液态玻璃球体
    class LiquidOrb {
      x: number;
      y: number;
      radius: number;
      vx: number;
      vy: number;
      color: string;
      opacity: number;
      pulsePhase: number;

      constructor(canvasWidth: number, canvasHeight: number) {
        this.x = Math.random() * canvasWidth;
        this.y = Math.random() * canvasHeight;
        this.radius = Math.random() * 200 + 100;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        
        // 健康主题色彩 - 柔和的绿色和蓝色系
        const colors = [
          'rgba(134, 239, 172, 0.15)', // 薄荷绿
          'rgba(147, 197, 253, 0.15)', // 天空蓝
          'rgba(165, 243, 252, 0.15)', // 青色
          'rgba(167, 243, 208, 0.15)', // 翡翠绿
          'rgba(196, 181, 253, 0.15)', // 薰衣草紫
        ];
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.opacity = Math.random() * 0.3 + 0.1;
        this.pulsePhase = Math.random() * Math.PI * 2;
      }

      update() {
        // 缓慢移动
        this.x += this.vx;
        this.y += this.vy;

        // 脉动效果
        this.pulsePhase += 0.01;
        const pulseFactor = Math.sin(this.pulsePhase) * 0.1 + 1;
        const currentRadius = this.radius * pulseFactor;

        // 边界反弹
        if (this.x - currentRadius < 0 || this.x + currentRadius > window.innerWidth) {
          this.vx *= -1;
        }
        if (this.y - currentRadius < 0 || this.y + currentRadius > window.innerHeight) {
          this.vy *= -1;
        }

        // 鼠标交互
        const dx = mouseRef.current.x - this.x;
        const dy = mouseRef.current.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 200) {
          const force = (200 - distance) / 200;
          this.vx -= (dx / distance) * force * 0.02;
          this.vy -= (dy / distance) * force * 0.02;
        }

        // 速度衰减
        this.vx *= 0.99;
        this.vy *= 0.99;

        // 限制速度
        const maxSpeed = 1;
        const speed = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
        if (speed > maxSpeed) {
          this.vx = (this.vx / speed) * maxSpeed;
          this.vy = (this.vy / speed) * maxSpeed;
        }
      }

      draw(ctx: CanvasRenderingContext2D) {
        const pulseFactor = Math.sin(this.pulsePhase) * 0.1 + 1;
        const currentRadius = this.radius * pulseFactor;

        // 外发光
        const gradient = ctx.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, currentRadius
        );
        gradient.addColorStop(0, this.color.replace('0.15', '0.3'));
        gradient.addColorStop(0.5, this.color.replace('0.15', '0.2'));
        gradient.addColorStop(1, this.color.replace('0.15', '0'));

        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, currentRadius, 0, Math.PI * 2);
        ctx.fill();

        // 内部高光
        const highlightGradient = ctx.createRadialGradient(
          this.x - currentRadius * 0.3, 
          this.y - currentRadius * 0.3, 
          0,
          this.x, this.y, currentRadius * 0.8
        );
        highlightGradient.addColorStop(0, 'rgba(255, 255, 255, 0.2)');
        highlightGradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

        ctx.globalAlpha = this.opacity * 0.5;
        ctx.fillStyle = highlightGradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, currentRadius * 0.8, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // 创建液态球体
    const orbs: LiquidOrb[] = [];
    for (let i = 0; i < 6; i++) {
      orbs.push(new LiquidOrb(canvas.width, canvas.height));
    }

    // 动画循环
    const animate = () => {
      // 渐变背景
      const bgGradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      bgGradient.addColorStop(0, '#e8f5e9');    // 浅绿色
      bgGradient.addColorStop(0.5, '#e1f5fe');  // 浅蓝色
      bgGradient.addColorStop(1, '#f3e5f5');    // 浅紫色

      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // 绘制液态球体
      orbs.forEach(orb => {
        orb.update();
        orb.draw(ctx);
      });

      // 添加噪点纹理
      ctx.globalAlpha = 0.03;
      for (let i = 0; i < 100; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const size = Math.random() * 2;
        ctx.fillStyle = 'white';
        ctx.fillRect(x, y, size, size);
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    // 鼠标移动监听
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10"
      style={{ 
        background: 'linear-gradient(135deg, #e8f5e9 0%, #e1f5fe 50%, #f3e5f5 100%)',
        filter: 'blur(0.5px)'
      }}
    />
  );
};

export default LiquidGlassBackground;