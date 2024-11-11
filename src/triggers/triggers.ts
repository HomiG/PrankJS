export type Trigger = 'click' | 'keypress' | 'timeout' | 'mouseover' | 'scroll';

export interface TriggerCondition {
    trigger: Trigger;
    condition?: () => boolean;
}

export const setupTriggers = (triggerMap: Record<Trigger, () => void>, conditions: TriggerCondition[]): void => {
    const handleEvent = (event: Trigger) => {
        const condition = conditions.find(c => c.trigger === event);
        if (condition?.condition ? condition.condition() : true) {
            if (triggerMap[event]) {
                triggerMap[event]();
            }
        }
    };

    document.addEventListener('click', () => handleEvent('click'));
    document.addEventListener('keypress', () => handleEvent('keypress'));
    document.addEventListener('mouseover', () => handleEvent('mouseover'));
    document.addEventListener('scroll', () => handleEvent('scroll'));

    setTimeout(() => handleEvent('timeout'), 5000); // Example timeout trigger after 5 seconds
};