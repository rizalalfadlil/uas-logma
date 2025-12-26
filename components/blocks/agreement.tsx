"use client";
import React, { useState } from "react";
import { Checkbox } from "../ui/checkbox";
import { Button } from "../ui/button";

export default function Agreement({
  onClose,
  onCancel,
}: {
  onClose: () => void;
  onCancel: () => void;
}) {
  const [items, setItems] = useState([
    { id: "islam", text: "Saya beragama Islam", checked: false },
    {
      id: "merdeka",
      text: "Saya adalah orang yang merdeka (bukan hamba sahaya)",
      checked: false,
    },
    {
      id: "milik",
      text: "Harta yang dizakatkan adalah milik saya sepenuhnya (Al-Milk ut-Tamm)",
      checked: false,
    },
    {
      id: "halal",
      text: "Harta didapatkan dengan cara yang halal dan baik",
      checked: false,
    },
    {
      id: "nisab",
      text: "Harta telah mencapai ambang batas minimum (Nisab)",
      checked: false,
    },
    {
      id: "niat",
      text: "Saya berniat menunaikan zakat dengan ikhlas karena Allah Ta'ala",
      checked: false,
    },
  ]);

  const allChecked = items.every((item) => item.checked);

  const toggleItem = (id: string) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  const handleSelectAll = () => {
    const targetValue = !allChecked;
    setItems(items.map((item) => ({ ...item, checked: targetValue })));
  };

  return (
    <div>
      <div className="flex flex-col gap-2">
        <p>dengan ini saya menyatakan bahwa:</p>
        <ul className="space-y-2 mb-8">
          {items.map((item) => (
            <li key={item.id}>
              <div className="flex items-center">
                <Checkbox
                  className="checkbox-primary"
                  checked={item.checked}
                  onClick={() => toggleItem(item.id)}
                />
                <label className="text-sm ml-2">{item.text}</label>
              </div>
            </li>
          ))}
        </ul>
        <div className="flex gap-2">
          <Button variant="secondary" onClick={onCancel}>batal</Button>
          <div className="grow" />
          <Button variant="secondary" onClick={handleSelectAll}>
            centang semua
          </Button>
          <Button onClick={onClose} disabled={!allChecked}>lanjutkan</Button>
        </div>
      </div>
    </div>
  );
}
