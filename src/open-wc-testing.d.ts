

declare module '@open-wc/testing' {
  export function fixture<T>(template: string | TemplateResult): Promise<T>;
  export const html: (
    strings: TemplateStringsArray,
    ...values: any[]
  ) => TemplateResult;
}
