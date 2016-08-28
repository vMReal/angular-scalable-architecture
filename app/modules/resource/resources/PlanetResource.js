
export default function PlanetResource($resource, api) {

    return $resource( api.generateUrl('planets.json'), {}, {
            query: {
                method: 'GET',
                isArray: true
            }
        });
}
