import Character from '../Character';
import Team from '../Team';

test('Создание новой команды Team', () => {
  const description = new Team('Reya');
  const result = { name: 'Reya', members: new Set() };
  expect(description).toEqual(result);
});

test('Добавление нового игрока методов add', () => {
  const team = new Team('Reya');
  const unit = new Character('warrior');
  team.add(unit);
  const result = {
    name: 'Reya',
    members: new Set([{
      name: 'warrior',
      level: 1,
      health: 100,
    }]),
  };
  expect(team).toEqual(result);
});

test('Ошибка добавления нового игрока при дублировании', () => {
  const team = new Team('Reya');
  const unit = new Character('warrior');
  team.add(unit);
  expect(() => team.add(unit)).toThrow(new Error('Такой персонаж уже есть'));
});

test('Добавление новых игрокоы методом addAll', () => {
  const team = new Team('Reya');
  const unit1 = new Character('warrior1');
  const unit2 = new Character('warrior2');
  const unit3 = new Character('warrior3');
  team.addAll(unit1, unit2, unit3);
  const result = {
    name: 'Reya',
    members: new Set([{
      name: 'warrior1',
      level: 1,
      health: 100,
    },
    {
      name: 'warrior2',
      level: 1,
      health: 100,
    },
    {
      name: 'warrior3',
      level: 1,
      health: 100,
    }]),
  };
  expect(team).toEqual(result);
});

test('Добавление новых игрокоы методом addAll, задвоение персонажа не возникает', () => {
  const team = new Team('Reya');
  const unit1 = new Character('warrior1');
  const unit2 = new Character('warrior2');
  const unit3 = new Character('warrior3');
  team.addAll(unit1, unit2, unit3, unit3);
  const result = {
    name: 'Reya',
    members: new Set([{
      name: 'warrior1',
      level: 1,
      health: 100,
    },
    {
      name: 'warrior2',
      level: 1,
      health: 100,
    },
    {
      name: 'warrior3',
      level: 1,
      health: 100,
    }]),
  };
  expect(team).toEqual(result);
});

test('конвертация Set в массив', () => {
  const team = new Team('Reya');
  const unit1 = new Character('warrior1');
  const unit2 = new Character('warrior2');
  const unit3 = new Character('warrior3');
  team.addAll(unit1, unit2, unit3);
  const result = [
    {
      name: 'warrior1',
      level: 1,
      health: 100,
    },
    {
      name: 'warrior2',
      level: 1,
      health: 100,
    },
    {
      name: 'warrior3',
      level: 1,
      health: 100,
    }];
  expect(team.toArray()).toEqual(result);
});