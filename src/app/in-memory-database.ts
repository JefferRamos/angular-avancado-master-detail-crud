import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Category } from './pages/categories/shared/category.model';
import { Entry } from './pages/entries/shared/entry.model';

export class InMemoryDatabase implements InMemoryDbService {

  createDb() {
    const categories: Category[] = [
      { id: 1, name: 'Moradia', description: 'Pagamentos de Contas de Casa' },
      { id: 2, name: 'Saúde', description: 'Plano de Saúde e Remédios' },
      { id: 3, name: 'Lazer', description: 'Cinemas, parque, praia, etc' },
      { id: 4, name: 'Salário', description: 'Recebimento de Salário' },
      { id: 5, name: 'Freelas', description: 'Trabalhos como freelancer' },
    ];

    const entries: Entry[] = [
      {
        id: 1,
        nome: 'Gás de Cozinha',
        categoryId: categories[0].id,
        category: categories[0],
        paid: true,
        date: '14/10/2018',
        amount: '70,80',
        type: 'expense',
        description: 'Qualquer descrição para essa despesa'
      } as Entry,

      {
        id: 2,
        nome: 'Suplementos',
        categoryId: categories[1].id,
        category: categories[1],
        paid: false,
        date: '14/10/2018',
        amount: '15,00',
        type: 'expense',
      } as Entry,

      {
        id: 3,
        nome: 'Salário na Empresa X',
        categoryId: categories[3].id,
        category: categories[3],
        paid: true,
        date: '15/10/2018',
        amount: '4405,49',
        type: 'revenue',
      } as Entry,

      {
        id: 4,
        nome: 'Aluguel de Filme',
        categoryId: categories[2].id,
        category: categories[2],
        paid: true,
        date: '16/10/2018',
        amount: '15,00',
        type: 'expense',
      } as Entry,

      {
        id: 5,
        nome: 'Suplementos',
        categoryId: categories[1].id,
        category: categories[1],
        paid: false,
        date: '14/10/2018',
        amount: '70,80',
        type: 'expense',
      } as Entry,

      {
        id: 6,
        nome: 'Video Game da filha',
        categoryId: categories[2].id,
        category: categories[2],
        paid: true,
        date: '14/10/2018',
        amount: '70,80',
        type: 'expense',
      } as Entry,

      {
        id: 7,
        nome: 'Uber',
        categoryId: categories[1].id,
        category: categories[1],
        paid: false,
        date: '14/10/2018',
        amount: '70,80',
        type: 'expense',
      } as Entry,

      {
        id: 8,
        nome: 'Aluguel',
        categoryId: categories[2].id,
        category: categories[2],
        paid: true,
        date: '14/10/2018',
        amount: '70,80',
        type: 'expense',
      } as Entry,

      {
        id: 9,
        nome: 'Gás de Cozinha',
        categoryId: categories[1].id,
        category: categories[1],
        paid: true,
        date: '14/10/2018',
        amount: '70,80',
        type: 'expense',
      } as Entry,

      {
        id: 10,
        nome: 'Pagamento pelo Projeto XYZ',
        categoryId: categories[4].id,
        category: categories[4],
        paid: true,
        date: '14/10/2018',
        amount: '70,80',
        type: 'expense',
      } as Entry,

      {
        id: 11,
        nome: 'Aluguel de Filme',
        categoryId: categories[2].id,
        category: categories[2],
        paid: true,
        date: '14/10/2018',
        amount: '70,80',
        type: 'expense',
      } as Entry,

      {
        id: 12,
        nome: 'Cinema',
        categoryId: categories[2].id,
        category: categories[2],
        paid: true,
        date: '14/10/2018',
        amount: '70,80',
        type: 'expense',
      } as Entry,
    ];

    return { categories, entries };
  }

}
