export interface LayoutPage<T = object> extends React.FC<T> {
    getLayout?: (page: JSX.Element) => JSX.Element;
}
