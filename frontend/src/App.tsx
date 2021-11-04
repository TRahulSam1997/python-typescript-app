import React from 'react';
import logo from './logo.svg';
import './App.css';

const todoItems = [
  {
    id: 1,
    title: "Go to Market",
    description: "Buy ingredients to prepare dinner",
    completed: true,
  },
  {
    id: 2,
    title: "Study",
    description: "Read Algebra and History textbook for the upcoming test",
    completed: false,
  },
  {
    id: 3,
    title: "Sammy's books",
    description: "Go to library to return Sammy's books",
    completed: true,
  },
  {
    id: 4,
    title: "Article",
    description: "Write article on how to use Django with React",
    completed: false,
  },
];

interface Props {
  todoItems: string[]
}

class App extends React.Component {
  constructor(props:Props) {
    super(props);
    this.state = {
      todoItems: todoItems,
    };
  }

  render() {
    return (
      <div className="container">
        <div>Hello World!</div>
      </div>
    );
  }
}

export default App;
