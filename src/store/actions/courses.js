import {
  FETCH_COURSES,
  MESSAGE_COURSE,
  STATUS_COURSES,
  WATCH_COURSE,
} from "constants/types/courses";

export const statusCourse = (status) => ({
  type: STATUS_COURSES,
  payload: status,
});

export const fetchCourse = (courses) => ({
  type: FETCH_COURSES,
  payload: courses,
});

export const watchCourse = (course) => ({
  type: WATCH_COURSE,
  payload: course,
});
export const messageCourse = (message) => ({
  type: MESSAGE_COURSE,
  payload: message,
});
