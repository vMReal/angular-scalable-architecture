
export default function api( apiProvider, SYSTEM_ENV ) {

    switch (SYSTEM_ENV) {
        case 'prod':
            apiProvider.setVersion('v3');
            break;

        case 'test':
            apiProvider.setVersion('v2');
            break;

        default:
            apiProvider.setVersion('v1');
            break
    };
}