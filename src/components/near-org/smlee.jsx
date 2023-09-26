import { VmComponent } from '@/components/vm/VmComponent';
import { useBosComponents } from '@/hooks/useBosComponents';

export function SmleePage() {
    const components = useBosComponents();


    return <>
        <VmComponent src={components.smlee} props={{accountId: 'smleekr.near'}}/>
    </>;
}