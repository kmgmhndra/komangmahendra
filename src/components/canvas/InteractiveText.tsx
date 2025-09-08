'use client';

import { useRef, useMemo, useEffect, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import { Mesh } from 'three';
import * as THREE from 'three';
import { useSpring, animated } from '@react-spring/three';

const AnimatedText = animated(Text);

export default function InteractiveText() {
  const textRef = useRef<Mesh>(null!);
  const { mouse, viewport, size } = useThree();
  const [devicePixelRatio, setDevicePixelRatio] = useState(1);

  // Monitor device pixel ratio dan screen size untuk responsive yang lebih akurat
  useEffect(() => {
    setDevicePixelRatio(window.devicePixelRatio || 1);
    
    const handleResize = () => {
      setDevicePixelRatio(window.devicePixelRatio || 1);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const [springProps] = useSpring(() => ({
    from: {
      scale: 0.5,
      'material-opacity': 0,
    },
    to: {
      scale: 1,
      'material-opacity': 1,
    },
    config: { mass: 1, tension: 280, friction: 60 },
    delay: 300,
  }));

  // Perhitungan responsive yang lebih akurat
  const responsiveValues = useMemo(() => {
    // Dapatkan ukuran layar fisik
    const screenWidth = window.screen.width;
    const screenHeight = window.screen.height;
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    
    // Hitung DPI/PPI perkiraan
    const diagonalPixels = Math.sqrt(screenWidth ** 2 + screenHeight ** 2);
    const estimatedDPI = diagonalPixels / Math.sqrt((screenWidth/96) ** 2 + (screenHeight/96) ** 2);
    
    // Kategorisasi device berdasarkan ukuran dan DPI
    const isSmallScreen = windowWidth < 768;
    const isMediumScreen = windowWidth >= 768 && windowWidth < 1200;
    const isLargeScreen = windowWidth >= 1200 && windowWidth < 1920;
    const isXLScreen = windowWidth >= 1920;
    
    // Base font size yang konsisten
    let baseFontSize;
    
    if (isSmallScreen) {
      baseFontSize = 0.8;
    } else if (isMediumScreen) {
      baseFontSize = 0.9;
    } else if (isLargeScreen) {
      baseFontSize = 1.0;
    } else {
      baseFontSize = 1.2;
    }
    
    // Sesuaikan dengan viewport Three.js tapi dengan scaling yang lebih terkontrol
    const viewportScale = Math.min(viewport.width / 8, viewport.height / 4.5);
    let fontSize = baseFontSize * viewportScale;
    
    // Normalisasi berdasarkan device pixel ratio untuk konsistensi visual
    fontSize = fontSize * (1 / Math.max(devicePixelRatio * 0.5, 0.8));
    
    // Batas minimum dan maksimum untuk mencegah teks terlalu kecil/besar
    fontSize = Math.max(0.3, Math.min(fontSize, 2.5));
    
    // Posisi Y yang responsif
    const aspectRatio = windowWidth / windowHeight;
    const baseY = aspectRatio > 1.5 ? 0.2 : aspectRatio > 1 ? 0.4 : 0.6;
    
    // Sensitivitas rotasi berdasarkan ukuran layar
    const rotationSensitivity = isSmallScreen ? 120 : isMediumScreen ? 100 : 80;
    
    return {
      fontSize,
      baseY,
      rotationSensitivity,
      isSmallScreen,
      screenInfo: {
        windowWidth,
        windowHeight,
        screenWidth,
        screenHeight,
        estimatedDPI,
        devicePixelRatio
      }
    };
  }, [viewport.width, viewport.height, devicePixelRatio]);

  const targetRotation = useRef({ x: 0, y: 0 });

  useFrame((state, delta) => {
    const clampedDelta = Math.min(delta, 1 / 30);
    if (textRef.current) {
      // Interaksi mouse yang disesuaikan dengan ukuran layar
      const mouseSensitivity = responsiveValues.isSmallScreen ? 1.0 : 1.5;
      
      targetRotation.current.y = (mouse.x * Math.PI * mouseSensitivity) / responsiveValues.rotationSensitivity;
      targetRotation.current.x = (-mouse.y * Math.PI * mouseSensitivity) / responsiveValues.rotationSensitivity;
      
      textRef.current.rotation.y = THREE.MathUtils.lerp(
        textRef.current.rotation.y,
        targetRotation.current.y,
        clampedDelta * 2.5
      );
      textRef.current.rotation.x = THREE.MathUtils.lerp(
        textRef.current.rotation.x,
        targetRotation.current.x,
        clampedDelta * 2.5
      );
      
      // Floating animation yang lebih halus pada layar kecil
      const floatingIntensity = responsiveValues.isSmallScreen ? 0.03 : 0.05;
      const floatingOffset = Math.sin(state.clock.elapsedTime * 0.8) * floatingIntensity;
      textRef.current.position.y = responsiveValues.baseY + floatingOffset;
    }
  });

  // Debug info (bisa dihapus pada production)
  console.log('Responsive values:', {
    fontSize: responsiveValues.fontSize,
    screenInfo: responsiveValues.screenInfo
  });

  return (
    <AnimatedText
      {...springProps}
      ref={textRef}
      font="/fonts/Inter_18pt-Black.ttf"
      fontSize={responsiveValues.fontSize}
      position={[0, responsiveValues.baseY, 0]}
      color="white"
      anchorX="center"
      anchorY="middle"
      maxWidth={viewport.width * 0.9}
      textAlign="center"
    >
      MAHENDRA
    </AnimatedText>
  );
}   