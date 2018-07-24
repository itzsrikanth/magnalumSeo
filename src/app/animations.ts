import { trigger, state, style, transition, animate, query, stagger } from '@angular/animations';

export const fadeStagger = trigger('fadeStagger', [
    transition('void => *', [
        query('.fade-stagger', style({
            transform: 'translateY(100px)',
            opacity: 0
        })),
        query('.fade-stagger', stagger('100ms', [
            animate(500, style({
                transform: 'translateY(0px)',
                opacity: 1
            }))
        ]))
    ])
]);