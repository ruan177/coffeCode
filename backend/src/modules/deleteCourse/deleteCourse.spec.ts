import request from 'supertest';
import app from '../../app';

describe('Delete Course by ID Endpoint', () => {
    it('should delete the course by ID', async () => {
        const course_id = "15ff0249-9e68-4b1b-beb3-32b444df9cc2"
        const response = await request(app).delete(`/courses/${course_id}/delete`);
        console.log(response.error)

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('message', 'Course deleted successfully');
    });
})