export interface LinkNodeInterface<t> {
    next?: LinkNodeInterface<t>,
    cargo: t
};
