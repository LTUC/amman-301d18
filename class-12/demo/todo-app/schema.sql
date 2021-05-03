DROP TABLE IF EXISTS tasks;
CREATE TABLE tasks (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255),
  description TEXT,
  contact VARCHAR(255),
  status VARCHAR(255),
  category VARCHAR(255)
);

INSERT INTO tasks (title, contact, status, category, description) 
VALUES('prepare the lecture','Roaa','completed','work','should end befor 10PM');