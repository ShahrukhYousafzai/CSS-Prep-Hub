
import type { PastPaperQuestion } from '../../types';

export const pastPapers: PastPaperQuestion[] = [
    {
        id: 'pp-physics-2023-p1',
        year: 2023,
        subject: 'Physics',
        questionText: 'State and explain Newton\'s three laws of motion. Provide a real-world example for each.',
        idealAnswer: 'Newton\'s First Law (Inertia): An object remains at rest or in uniform motion unless acted upon by a net external force. Example: A passenger in a moving bus lurches forward when the bus suddenly stops. Second Law (F=ma): The acceleration of an object is directly proportional to the net force acting on it and inversely proportional to its mass. Example: It is easier to push an empty shopping cart than a full one. Third Law: For every action, there is an equal and opposite reaction. Example: A rocket expels gas downwards (action) to propel itself upwards (reaction).',
    },
    {
        id: 'pp-chem-2021-p1',
        year: 2021,
        subject: 'Chemistry',
        questionText: 'What is a chemical bond? Differentiate between ionic and covalent bonds with examples.',
        idealAnswer: 'A chemical bond is a lasting attraction between atoms, ions or molecules that enables the formation of chemical compounds. An ionic bond involves the complete transfer of valence electrons between atoms, creating a positively charged ion (cation) and a negatively charged ion (anion) that are attracted to each other. Example: Sodium Chloride (NaCl). A covalent bond involves the sharing of electron pairs between atoms. These shared pairs are known as shared pairs or bonding pairs. Example: Water (H2O).',
    },
];
