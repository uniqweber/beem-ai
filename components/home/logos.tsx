"use client";
import Image from "next/image";

const logoItems = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

const LogoList = ({isDuplicated = false}) => (
    <>
        {logoItems.map((item) => (
            <Image
                key={`${isDuplicated ? "dup-" : ""}${item}`}
                src={`/fortune-company-${item.toString().padStart(2, "0")}.png`}
                width={100}
                height={100}
                alt="logo"
                className="logo-item"
            />
        ))}
    </>
);

export default function LogosSlider() {
    return (
        <div className="relative">
            <h2 className="uppercase text-center mb-10 font-semibold text-white/60">
                Used by Fortune 500 Companies & Scale ups
            </h2>

            <div className="logo-carousel-mask logo-carousel-group">
                <div className="logo-track">
                    <LogoList />

                    <div className="logo-track-duplicate" aria-hidden="true">
                        <LogoList isDuplicated={true} />
                    </div>
                </div>
            </div>
        </div>
    );
}
