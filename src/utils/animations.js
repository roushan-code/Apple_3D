import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const animateWithGsap = (target, animationProps, scrollProps) => {
    gsap.to(target,{
        ...animationProps,
        scrollTrigger: {
            trigger: target,
            start: 'top 85%',
            toggleActions: 'restart reverse restart reverse',
            ...scrollProps
        }
    });
    

    
}

export const animateWithGsapTimeline = (timeline, rotationRef, rotationState, firstTarget,  secondTarget, animationProps) => {
    timeline.to(rotationRef.current.rotation,{
        y: rotationState,
        duration: 1,
        ease: 'power2.inOut'
    });

    timeline.to(
        firstTarget,
        {
            ...animationProps,
            ease: 'power2.inOut'
        },
        '<'
    )

    timeline.to(
        secondTarget,
        {
            ...animationProps,
            ease: 'power2.inOut'
        },
        '<'
    )
}