'use client';

import { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import * as THREE from 'three';

// --- Konfigurasi untuk penyesuaian ---
const ROTATION_FACTOR = 0.15;
const DAMPING_FACTOR = 0.05;
const DRIFT_SPEED = 0.0005;
// ------------------------------------

interface StarFieldProps {
  starColor?: string; // warna dasar bintang
}

export default function StarField({ starColor = '#4a86e8' }: StarFieldProps) {
  const smallStarsRef = useRef<THREE.Points>(null!);
  const mediumStarsRef = useRef<THREE.Points>(null!);
  const largeStarsRef = useRef<THREE.Points>(null!);

  const smoothedTargetRotation = useRef(new THREE.Vector2());

  // 👉 Set warna bintang setelah komponen mount
  useEffect(() => {
    const base = new THREE.Color('#ffffff');
    const target = new THREE.Color(starColor);

    [smallStarsRef, mediumStarsRef, largeStarsRef].forEach((ref, idx) => {
      if (ref.current) {
        const mat = ref.current.material as THREE.PointsMaterial;

        // Gradien sederhana: makin dekat makin pekat warnanya
        if (idx === 0) mat.color = base.clone().lerp(target, 0.3);
        if (idx === 1) mat.color = base.clone().lerp(target, 0.6);
        if (idx === 2) mat.color = base.clone().lerp(target, 0.9);
      }
    });
  }, [starColor]);

  useFrame((state) => {
    const { clock, mouse } = state;

    const finalTargetRotation = {
      x: mouse.y * ROTATION_FACTOR,
      y: mouse.x * ROTATION_FACTOR,
    };

    smoothedTargetRotation.current.x = THREE.MathUtils.lerp(
      smoothedTargetRotation.current.x,
      finalTargetRotation.x,
      DAMPING_FACTOR
    );
    smoothedTargetRotation.current.y = THREE.MathUtils.lerp(
      smoothedTargetRotation.current.y,
      finalTargetRotation.y,
      DAMPING_FACTOR
    );

    const refs = [
      { ref: smallStarsRef, parallax: 1.0, drift: 1.0 },
      { ref: mediumStarsRef, parallax: 0.8, drift: 0.8 },
      { ref: largeStarsRef, parallax: 0.6, drift: 0.6 },
    ];

    refs.forEach(({ ref, parallax, drift }) => {
      if (ref.current) {
        const elapsedTime = clock.getElapsedTime();
        const driftX = Math.sin(elapsedTime * 0.1) * DRIFT_SPEED * drift;
        const driftY = Math.cos(elapsedTime * 0.15) * DRIFT_SPEED * drift;
        const driftZ = Math.sin(elapsedTime * 0.2) * DRIFT_SPEED * drift;

        ref.current.rotation.x =
          THREE.MathUtils.lerp(
            ref.current.rotation.x,
            smoothedTargetRotation.current.x * parallax,
            DAMPING_FACTOR
          ) + driftX;

        ref.current.rotation.y =
          THREE.MathUtils.lerp(
            ref.current.rotation.y,
            smoothedTargetRotation.current.y * parallax,
            DAMPING_FACTOR
          ) + driftY;

        ref.current.rotation.z += driftZ;
      }
    });
  });

  return (
    <group>
      <Stars ref={smallStarsRef} radius={120} depth={100} count={500} factor={4} fade speed={0} />
      <Stars ref={mediumStarsRef} radius={100} depth={80} count={1000} factor={5} fade speed={0} />
      <Stars ref={largeStarsRef} radius={80} depth={60} count={500} factor={7} fade speed={0} />
    </group>
  );
}
