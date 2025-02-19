import prisma from '$lib/prisma';
import type { Actions, PageServerLoad } from './$types';

export const actions = {
    default: async ({ request }) => {
        const data = await request.formData();
        const content = data.get('content') as string ?? '';

        if (!content.trim()) {
            return { success: false, message: 'Le contenu de la tâche ne peut être vide' };
        }

        await prisma.todo.create({
            data: {
                content
            }
        });

        return { success: true };
    }
} satisfies Actions;

export const load: PageServerLoad = async () => {
    const todos = await prisma.todo.findMany()

    return { todos };
};
