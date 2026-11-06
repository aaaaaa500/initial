import { describe, it } from "vitest";
import { rooms } from "@/data/rooms"; // check the real export name / проверь настоящее имя экспорта
import { checkAvailability } from "@/lib/availability";

describe("tmp: malformed time check / временная проверка кривого времени", () => {
  it("prints what checkAvailability returns / печатает, что возвращает функция", () => {
    // room = first room from the catalog / room = первая комната из каталога
    const room = rooms[0];
    // badTimes = list of malformed start times / badTimes = список кривых времён начала
    const badTimes = ["99:99", "abc", "25:00"];

    for (const bad of badTimes) {
      // result = what the function returns / result = то, что возвращает функция
      const result = checkAvailability(room, bad, "23:00");
      console.log(bad, "=>", result.status, "|", result.message);
    }
  });
});