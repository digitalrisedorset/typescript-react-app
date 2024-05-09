import React from 'react';
import { connect } from 'react-redux'
import { Todo, fetchToDos, deleteToDo } from "../actions";
import {StoreState} from "../reducers";

interface AppProps {
    color?: string;
    todos: Todo[];
    fetchToDos: Function;
    deleteToDo: typeof deleteToDo;
}

interface AppState {
    fetching: boolean
}

class App extends React.Component<AppProps, AppState>{
    constructor(props: AppProps) {
        super(props);

        this.state = { fetching: false }
    }

    componentDidUpdate(prevProps: Readonly<AppProps>, prevState: Readonly<AppState>, snapshot?: any): void {
        if (!prevProps.todos.length && this.props.todos.length) {
            this.setState({ fetching: false })
        }
    }

    onButtonClick = (): void => {
        this.props.fetchToDos()
        this.setState({ fetching: true })
    }

    onDeleteClick = (id: number): void => {
        this.props.deleteToDo(id)
    }

    renderList(): JSX.Element[] {
        return this.props.todos.map((todo: Todo) => {
            return (
                <div>
                    <p>{todo.title}</p>
                    <div key={todo.id} onClick={() => this.onDeleteClick(todo.id)}>Delete</div>
                </div>
            );
        });
    }

    render() {
        return <div>
            <button onClick={this.onButtonClick}>Fetch</button>
            {this.state.fetching? 'Loading': null}
            {this.renderList()}
        </div>;
    }
}

const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
    return { todos }
}

export default connect(
    mapStateToProps,
    { fetchToDos, deleteToDo }
)(App)