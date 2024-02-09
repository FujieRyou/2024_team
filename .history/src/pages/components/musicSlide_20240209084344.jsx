// pages/scroll2.jsx
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Scroll2() {
    const [current, setCurrent] = useState(0);
    const sliderLength = 5; // 仮にスライダーの要素数を6とします

useEffect(() => {
        const interval = setInterval(() => {
        setCurrent((current) => (current + 1) % sliderLength);
    }, 3000);

    return () => clearInterval(interval);
}, []);

const getClassName = (index) => {
    if (index === current) return 'third';
    else if (index === (current + 1) % sliderLength) return 'fourth';
    else if (index === (current + 2) % sliderLength) return 'fifth';
    else if (index === (current - 1 + sliderLength) % sliderLength) return 'second';
    else if (index === (current - 2 + sliderLength) % sliderLength) return 'first';
    else return 'un-active';
};

return (
    <>
        <div className="scrollContent">
            <div className="scrollWrap">
                <ul className="scroll">
                    <li className={getClassName(0)}><Image src="/img/scroll.webp" alt="" width={145} height={145} /></li>
                    <li className={getClassName(1)}><Image src="/img/scroll2.webp" alt="" width={145} height={145} /></li>
                    <li className={getClassName(2)}><Image src="/img/scroll3.webp" alt="" width={145} height={145} /></li>
                    <li className={getClassName(3)}><Image src="/img/scroll4.webp" alt="" width={145} height={145} /></li>
                    <li className={getClassName(4)}><Image src="/img/scroll5.webp" alt="" width={145} height={145} /></li>
                </ul>
            </div>
        </div>
    </>
);
}
