import userData from '../data/user.json';

export default function handler(req, res) {
  res.status(200).json(userData);
}