import { motion } from "framer-motion";
import { FC } from "react";

// 一文字ずつ下から上へアニメーションする設定
const SlideBottom = {
    hidden: { opacity: 0, y: 20 }, // 初期状態: 下にオフセット
    visible: {
        opacity: 1,
        y: 0, // 表示位置
        transition: { duration: 0.5 }, // 各文字のアニメーション速度
    },
};

const container = {
    hidden: {}, // 子要素の初期状態に委ねる
    visible: {
        transition: {
            staggerChildren: 0.1, // 子要素を順番にアニメーション
        },
    },
};

interface AnimatedH1Props {
    text: string;
}

export const AnimatedH1: FC<AnimatedH1Props> = ({ text }) => {
    const letters: string[] = text.split(""); // 一文字ずつ分割

    return (
        <motion.h1
            variants={container} // 親要素のアニメーション設定
            initial="hidden"
            animate="visible"
            style={{ display: "inline-block" }}
        >
            {letters.map((char: string, index: number) => (
                <motion.span
                    key={index}
                    variants={SlideBottom} // 各文字にアニメーションを適用
                    style={{ display: "inline-block" }} // 各文字を個別に制御
                    // transition={{ delay: index * 0.1 }} // 順番にアニメーション
                >
                    {char === " " ? "\u00A0" : char} {/* スペースの扱い */}
                </motion.span>
            ))}
        </motion.h1>
    );
};
