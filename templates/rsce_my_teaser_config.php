<?php
return array(
    'label' => array('Teaser Block', 'Meine Beschreibung...'),
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
        'icon' => array(
            'label' => array('Icon', 'Beschreibung...'),
            'eval' => array('filesOnly' => true),
            'inputType' => 'fileTree'
        ),
        'position' => array(
            'label' => array('Bildausrichtung', 'Beschreibung...'),
            'inputType' => 'select',
            'options' => array(
                'right',
                'left',
            )
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

    )
);
