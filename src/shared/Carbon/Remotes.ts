import { Definitions } from "@rbxts/net";

const Remotes = Definitions.Create({
    DataBaseUpdate: Definitions.Event<[name: string, newValue: unknown]>()
});

export { Remotes };