import { getCards } from "./cards.api";

export interface DashboardStats {
  totalCards: number;
  masteredCards: number;
  streak: number;
  categories: Record<string, number>;
}

export async function getDashboardStats(): Promise<DashboardStats> {
  try {
    const cards = await getCards();

    const totalCards = cards.length;
    const masteredCards = cards.filter(card => card.category === 'DONE').length;

    const categories = cards.reduce((acc, card) => {
      const category = card.category;
      acc[category] = (acc[category] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    const streak = 0;

    return {
      totalCards,
      masteredCards,
      streak,
      categories
    };
  } catch (error) {
    console.error('Error fetching dashboard stats:', error);
    return {
      totalCards: 0,
      masteredCards: 0,
      streak: 0,
      categories: {}
    };
  }
}
