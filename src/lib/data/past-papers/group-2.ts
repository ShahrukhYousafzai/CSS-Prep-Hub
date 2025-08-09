
import type { PastPaperQuestion } from '../../types';

export const pastPapers: PastPaperQuestion[] = [
    {
        id: 'pp-physics-2023-p1',
        year: 2023,
        subject: 'Physics',
        questionText: 'State and explain Newton\'s three laws of motion. Provide a real-world example for each.',
        idealAnswer: '1st Law (Inertia): Object at rest stays at rest, object in motion stays in motion, unless acted on by a force. (Ex: Car passenger lurches forward on braking). 2nd Law (F=ma): Force equals mass times acceleration. (Ex: Pushing a full cart needs more force than an empty one). 3rd Law: For every action, there is an equal and opposite reaction. (Ex: Rocket propulsion).',
    },
    {
        id: 'pp-chem-2021-p1',
        year: 2021,
        subject: 'Chemistry',
        questionText: 'What is a chemical bond? Differentiate between ionic and covalent bonds with examples.',
        idealAnswer: 'A chemical bond is an attraction between atoms forming chemical compounds. Ionic bonds involve the transfer of electrons between atoms (e.g., NaCl), creating ions that attract each other. Covalent bonds involve the sharing of electrons between atoms (e.g., H2O).',
    },
];
