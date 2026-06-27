'use client';

import { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

function Delayed({ children }: { children: React.ReactNode }) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setShow(true), 300);
    return () => clearTimeout(t);
  }, []);
  return show ? <>{children}</> : null;
}

function Particles() {
  const ref = useRef<THREE.Points>(null);
  const mouse = useRef({ x: 999, y: 999 });
  const { pointer } = useThree();
  const frameSkip = useRef(0);

  const [positions, velocities] = useMemo(() => {
    const count = 80;
    const pos = new Float32Array(count * 3);
    const vel = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 6;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 2;
      vel[i * 3] = (Math.random() - 0.5) * 0.005;
      vel[i * 3 + 1] = (Math.random() - 0.5) * 0.005;
      vel[i * 3 + 2] = (Math.random() - 0.5) * 0.005;
    }
    return [pos, vel];
  }, []);

  useFrame(() => {
    frameSkip.current++;
    if (frameSkip.current % 2 !== 0) return;
    mouse.current.x += (pointer.x * 5 - mouse.current.x) * 0.05;
    mouse.current.y += (-pointer.y * 3 - mouse.current.y) * 0.05;

    if (ref.current) {
      const pos = ref.current.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < 80; i++) {
        const i3 = i * 3;

        const dx = pos[i3] - mouse.current.x;
        const dy = pos[i3 + 1] - mouse.current.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 2.5 && dist > 0.01) {
          const force = (2.5 - dist) / 2.5;
          const repel = 0.04;
          velocities[i3] += (dx / dist) * force * repel;
          velocities[i3 + 1] += (dy / dist) * force * repel;
          velocities[i3 + 2] += (dx / dist) * force * repel * 0.3;
        }

        velocities[i3] += (Math.random() - 0.5) * 0.004;
        velocities[i3 + 1] += (Math.random() - 0.5) * 0.004;
        velocities[i3 + 2] += (Math.random() - 0.5) * 0.002;

        velocities[i3] *= 0.98;
        velocities[i3 + 1] *= 0.98;
        velocities[i3 + 2] *= 0.98;

        pos[i3] += velocities[i3];
        pos[i3 + 1] += velocities[i3 + 1];
        pos[i3 + 2] += velocities[i3 + 2];

        if (pos[i3] > 6) pos[i3] = -6;
        else if (pos[i3] < -6) pos[i3] = 6;
        if (pos[i3 + 1] > 4) pos[i3 + 1] = -4;
        else if (pos[i3 + 1] < -4) pos[i3 + 1] = 4;
        if (pos[i3 + 2] > 2) pos[i3 + 2] = -2;
        else if (pos[i3 + 2] < -2) pos[i3 + 2] = 2;
      }
      ref.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.045}
        color="#FF6A01"
        transparent
        opacity={0.7}
        sizeAttenuation
      />
    </points>
  );
}

export const ParticleField = () => {
  return (
    <Delayed>
    <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        gl={{ alpha: true, antialias: false }}
        dpr={[1, 1.5]}
        style={{ background: 'transparent' }}
      >
        <Particles />
      </Canvas>
    </div>
    </Delayed>
  );
};
