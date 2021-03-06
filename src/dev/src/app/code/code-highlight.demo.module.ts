/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";

import {ClarityModule} from "@clr/angular";

import {CodeHighlightImportsDemo} from "./code-highlight-imports";
import {CodeHighlightSnippetDemo} from "./code-highlight-snippet";
import {CodeHighlightDemo} from "./code-highlight.demo";
import {ROUTING} from "./code-highlight.demo.routing";

/** @deprecated since 0.12 */
@NgModule({
    imports: [CommonModule, ClarityModule, ROUTING],
    declarations: [CodeHighlightDemo, CodeHighlightImportsDemo, CodeHighlightSnippetDemo],
    exports: [CodeHighlightDemo, CodeHighlightImportsDemo, CodeHighlightSnippetDemo]
})
export class CodeHighlightDemoModule {
}
