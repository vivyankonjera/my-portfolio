import { useEffect, useState } from "react";

const ProgressBar = () => {
    const [scrollPercentage, setScrollPercentage] = useState();
    const handleScroll = () => {
        const { scrollHeight, scrollTop } = document.documentElement;
        setScrollPercentage(
            `${(scrollTop / (scrollHeight - window.innerHeight)) * 100}%`
        );
    };

    useEffect(() => {
        document.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div id='progressBar' style={{ width: `${scrollPercentage}` }}></div>
    );
};

export default ProgressBar;
