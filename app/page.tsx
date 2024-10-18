'use client'

//import AcmeLogo from '@/app/ui/acme-logo';
//import { ArrowRightIcon } from '@heroicons/react/24/outline';
//import Link from 'next/link';
import { loveLight } from '@/app/ui/fonts';
import { roboto } from '@/app/ui/fonts';
//import Image from 'next/image';
import { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { motion } from 'framer-motion';
import styles from '@/app/ui/home.module.css';

export default function Page() {
  useEffect(() => {
    // Função para fogos de artifício ocupar toda a tela
    const fireConfetti = () => {
      var end = Date.now() + 3 * 1000; // Duração de 3 segundos

      (function frame() {
        confetti({
          particleCount: 3,
          angle: 60,
          spread: 80,
          origin: { x: 0 },
          colors: ['#ff0000', '#ffffff', '#ff69b4'],
        });
        confetti({
          particleCount: 3,
          angle: 120,
          spread: 80,
          origin: { x: 1 },
          colors: ['#ff0000', '#ffffff', '#ff69b4'],
        });

        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      })();
    };

    fireConfetti();
  });

  const estilo = {
    height: "500px"
  };
  const estilo2 = {
    marginBottom: "50px"
  };
  return (
    <main className={loveLight.className} style={estilo}>
      <div className={styles.container}>
        <div className={styles.heartsBackground}></div>
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className={`${styles.title} ${loveLight.className}`}
        >
          Eliane Ramos de Queiroz, você é o amor da minha vida!
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 2 }}
          className={`${styles.message} ${loveLight.className} antialised`}
        >
          Eu sou muito privilegiado por ter você ao meu lado. Te amo muito minha Paraibana linda e goxtosaaa! 🌵😍👩‍❤️‍👨
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 2.5 }}
          className={`${styles.submessage} ${loveLight.className} ${estilo2}`}>
          Do seu eterno admirador e namorado apaixonado, <b className={roboto.className}>Rodrigo Coladello Pereira ❤️👨‍💻</b>
        </motion.p>
      </div>
    </main>
  );
}
