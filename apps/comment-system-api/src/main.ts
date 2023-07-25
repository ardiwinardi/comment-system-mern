import 'reflect-metadata';
import Container from 'typedi';
import App from './app';
import { CommentsRoute } from './features/comments/comments.route';

const app = new App([Container.get(CommentsRoute)]);

app.listen();
