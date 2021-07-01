export interface INormalized<T> {
    byId: {[key: string]: T};
    allIds: string[];
}

type NormalizableType = {
    id: string | number;
}

export const normalization = <T>(items: (T & NormalizableType)[]): INormalized<T> => ({
    byId: items && items.length ? items.reduce(
        (acc, item) => ({
            ...acc,
            [item.id]: item,
        }), {},
    ) : [],
    allIds: items && items.map(({ id }) => String(id)),
});
