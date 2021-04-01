import React, { ReactElement } from 'react';

// 基本表达式指令
// 1. 条件
export function If({
  v,
  el,
  elseEl,
}: {
  v: boolean;
  el?: React.ReactElement;
  elseEl?: React.ReactElement;
}) {
  if (v) {
    return <React.Fragment>{el}</React.Fragment>;
  }
  if (elseEl) {
    return <React.Fragment>{elseEl}</React.Fragment>;
  }
  return <React.Fragment />;
}

export function Not({
  v,
  el,
  elseEl,
}: {
  v: boolean;
  el?: React.ReactElement;
  elseEl?: React.ReactElement;
}) {
  return <If v={!v} el={el} elseEl={elseEl} />;
}

export function Switch({ cases }: { cases: Array<[boolean, ReactElement]> }) {
  for (let i = 0; i < cases.length; i++) {
    if (cases[i][0]) {
      return <React.Fragment>{cases[i][1]}</React.Fragment>;
    }
  }
  return <React.Fragment />;
}

interface ForProps<T extends { [key: string]: any }> {
  data?: T[];
  dataIndex?: keyof T;
  render?: (item: T) => React.ReactElement;
}

export function For<T>({ data, render: Item, dataIndex }: ForProps<T>) {
  if (!data?.length || !Item) return <React.Fragment />;

  return (
    <React.Fragment>
      {data.map((v: any) => {
        const computedKey =
          dataIndex ?? (v['id'] ? 'id' : v['name'] ? 'name' : Math.random().toFixed(8));
        return <Item key={v[computedKey]} {...v} />;
      })}
    </React.Fragment>
  );
}
