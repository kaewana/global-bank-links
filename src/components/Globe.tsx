
import { useEffect, useRef } from 'react';

interface GlobeProps {
  className?: string;
}

const Globe = ({ className = '' }: GlobeProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      
      canvas.width = parent.clientWidth;
      canvas.height = parent.clientHeight;
    };

    setCanvasDimensions();
    window.addEventListener('resize', setCanvasDimensions);

    // Globe parameters
    const globeRadius = Math.min(canvas.width, canvas.height) * 0.25;
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const dotSize = 1;
    const numDots = 1000;
    const rotationSpeed = 0.0005;
    const dots: {x: number, y: number, z: number, opacity: number}[] = [];

    // Generate points on the globe surface
    for (let i = 0; i < numDots; i++) {
      // Calculate random point on the sphere surface
      const theta = Math.random() * Math.PI * 2; // Longitude (0 to 2π)
      const phi = Math.acos(2 * Math.random() - 1); // Latitude (0 to π)
      
      const x = globeRadius * Math.sin(phi) * Math.cos(theta);
      const y = globeRadius * Math.sin(phi) * Math.sin(theta);
      const z = globeRadius * Math.cos(phi);
      
      dots.push({ x, y, z, opacity: 0.1 + Math.random() * 0.5 });
    }

    let angle = 0;
    let animationFrameId: number;

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      angle += rotationSpeed;

      // Draw connections between close dots
      const visibleDots = dots.filter(dot => {
        const rotatedX = dot.x * Math.cos(angle) - dot.z * Math.sin(angle);
        const rotatedZ = dot.x * Math.sin(angle) + dot.z * Math.cos(angle);
        return rotatedZ > 0; // Only dots on the front side
      });

      // First draw connections
      ctx.strokeStyle = 'rgba(200, 220, 255, 0.15)';
      ctx.lineWidth = 0.3;
      
      for (let i = 0; i < visibleDots.length; i++) {
        const dot1 = visibleDots[i];
        const rotatedX1 = dot1.x * Math.cos(angle) - dot1.z * Math.sin(angle);
        const rotatedZ1 = dot1.x * Math.sin(angle) + dot1.z * Math.cos(angle);
        
        for (let j = i + 1; j < Math.min(i + 5, visibleDots.length); j++) {
          const dot2 = visibleDots[j];
          const rotatedX2 = dot2.x * Math.cos(angle) - dot2.z * Math.sin(angle);
          const rotatedZ2 = dot2.x * Math.sin(angle) + dot2.z * Math.cos(angle);
          
          const distance = Math.sqrt(
            Math.pow(rotatedX1 - rotatedX2, 2) + 
            Math.pow(dot1.y - dot2.y, 2) + 
            Math.pow(rotatedZ1 - rotatedZ2, 2)
          );
          
          if (distance < globeRadius * 0.4) {
            const opacity = 0.15 * (1 - distance / (globeRadius * 0.4));
            ctx.strokeStyle = `rgba(200, 220, 255, ${opacity})`;
            
            ctx.beginPath();
            ctx.moveTo(centerX + rotatedX1, centerY + dot1.y);
            ctx.lineTo(centerX + rotatedX2, centerY + dot2.y);
            ctx.stroke();
          }
        }
      }

      // Then draw dots
      dots.forEach(dot => {
        // Apply rotation around Y axis
        const rotatedX = dot.x * Math.cos(angle) - dot.z * Math.sin(angle);
        const rotatedZ = dot.x * Math.sin(angle) + dot.z * Math.cos(angle);
        
        // Only draw dots on the front half of the globe
        if (rotatedZ > 0) {
          // Calculate depth effect
          const depthFactor = 0.5 + 0.5 * (rotatedZ / globeRadius);
          const alpha = dot.opacity * depthFactor;
          
          // Draw dot
          ctx.beginPath();
          ctx.arc(
            centerX + rotatedX, 
            centerY + dot.y, 
            dotSize * depthFactor, 
            0, 
            Math.PI * 2
          );
          ctx.fillStyle = `rgba(220, 230, 255, ${alpha})`;
          ctx.fill();
        }
      });

      // Draw subtle glow
      const gradient = ctx.createRadialGradient(
        centerX, centerY, 0,
        centerX, centerY, globeRadius * 1.2
      );
      gradient.addColorStop(0, 'rgba(160, 180, 255, 0.1)');
      gradient.addColorStop(1, 'rgba(160, 180, 255, 0)');
      
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(centerX, centerY, globeRadius * 1.2, 0, Math.PI * 2);
      ctx.fill();

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', setCanvasDimensions);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className={`absolute inset-0 w-full h-full ${className}`}
    />
  );
};

export default Globe;
