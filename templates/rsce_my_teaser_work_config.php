<?php
return array(
    'label' => array('Arbeiten bei PVP', 'Meine Beschreibung...'),
    'types' => array('content', 'module'),
    'contentCategory' => 'texts',
    'moduleCategory' => 'miscellaneous',
    'beTemplate' => 'be_wildcard',
    'standardFields' => array('headline', 'cssID'),
    'wrapper' => array(
        'type' => 'none',
    ),
    'fields' => array(
        'headline' => array(
            'label' => array('Überschrift'),
            'inputType' => 'text'
        ),
        'description' => array(
            'label' => array('Teaser'),
            'eval' => array('rte' => 'tinyMCE'),
            'inputType' => 'textarea',
        ),
        'color' => array(
            'label' => array('Hintergrundfarbe', 'Beschreibung...'),
            'inputType' => 'select',
            'options' => array(
                'dunkelblau',
                'green',
            )
        ),
        'link' => array(
            'label' => array('Link', 'Beschreibung...'),
            'eval' => array('pageTree' => true),
            'inputType' => 'url'
        ),
        'icon1' => array(
            'label' => array('Icon Akkordion', 'Beschreibung...'),
            'eval' => array('filesOnly' => true),
            'inputType' => 'fileTree'
        ),
        'iconHover' => array(
            'label' => array('Icon Akkordion Hover', 'Beschreibung...'),
            'eval' => array('filesOnly' => true),
            'inputType' => 'fileTree'
        ),
        'icon' => array(
            'label' => array('Icon', 'Beschreibung...'),
            'eval' => array('filesOnly' => true),
            'inputType' => 'fileTree'
        ),

        'accordion' => array(
            'inputType' => 'list',
            'label' => array('Akkordion', 'Rechts auf "Neues Element" klicken'),
            'fields' => array(
                'accordion_headline' => array(
                    'label' => array('Akkordion Überschrift'),
                    'inputType' => 'text',
                ),
                'accordion_teaser' => array(
                    'label' => array('Akkordion Content'),
                    'eval' => array('rte' => 'tinyMCE'),
                    'inputType' => 'textarea',
                ),
            )
        )
    )
);
