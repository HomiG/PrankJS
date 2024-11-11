type Trigger = 'click' | 'keypress' | 'timeout' | 'mouseover' | 'scroll';

interface TriggerCondition {
    trigger: Trigger;
    condition?: () => boolean;
}

class TriggerManager {
    private triggerMap: Record<Trigger, () => void> = {
        click: () => {},
        keypress: () => {},
        timeout: () => {},
        mouseover: () => {},
        scroll: () => {},
    };

    private conditions: TriggerCondition[] = [];

    registerPrank(trigger: Trigger, prank: () => void, condition?: () => boolean, count?: number): this {
        this.triggerMap[trigger] = prank;
        this.conditions.push({ trigger, condition });
        return this;
    }

    initialize(): this {
        // Initialization logic here
        return this;
    }

    // Example method to execute a trigger manually
    executeTrigger(trigger: Trigger): void {
        if (this.triggerMap[trigger]) {
            const condition = this.conditions.find(cond => cond.trigger === trigger)?.condition;
            if (!condition || condition()) {
                this.triggerMap[trigger]();
            }
        } else {
            console.error(`Trigger ${trigger} not found.`);
        }
    }
}

// Example usage
const manager = new TriggerManager()
    .registerPrank('click', () => console.log('Click prank executed!'))
    .registerPrank('keypress', () => console.log('Keypress prank executed!'), () => true)
    .initialize();

